import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ArticlesService } from './articles.service';
import { articles } from './entities/article.entity';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';

@Resolver(() => articles)
export class ArticlesResolver {
  constructor(private readonly articlesService: ArticlesService) {}

  @Mutation(() => articles)
  createArticle(@Args('createArticleInput') createArticleInput: CreateArticleInput) {
    return this.articlesService.create(createArticleInput);
  }

  @Query(() => [articles], { name: 'articles' })
  findAll() {
    return this.articlesService.findAll();
  }

  @Query(() => articles, { name: 'article' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.articlesService.findOne(id);
  }

  @Mutation(() => articles)
  updateArticle(@Args('updateArticleInput') updateArticleInput: UpdateArticleInput) {
    return this.articlesService.update(updateArticleInput.id, updateArticleInput);
  }

  @Mutation(() => articles)
  removeArticle(@Args('id', { type: () => Int }) id: number) {
    return this.articlesService.remove(id);
  }
}
