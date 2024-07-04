import OTPNotificationEmail from '@/app/components/emails/otp-notification-email';
import PasswordResetEmail from '@/app/components/emails/password-reset-email';
import VerificationEmail from '@/app/components/emails/verification-email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:4210/new-verification?token=${token}`;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'メールアドレスの確認',
    react: VerificationEmail({ email, confirmLink }),
    headers: {
      'X-Entity-Ref-ID': new Date().getTime() + '',
    },
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:4210/new-password?token=${token}`;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'パスワードのリセット',
    react: PasswordResetEmail({ email, resetLink }),
    headers: {
      'X-Entity-Ref-ID': new Date().getTime() + '',
    },
  });
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: '2段階認証',
    react: OTPNotificationEmail({ email, otpCode: token }),
  });
};
