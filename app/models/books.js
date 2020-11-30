import Model, { attr } from '@ember-data/model';

export default class BooksModel extends Model {
    @attr url;
    @attr name;
    @attr isbn;
    @attr authors;
    @attr numberOfPages;
    @attr publisher;
    @attr country;
    @attr mediaType;
    @attr released;
    @attr characters;
    @attr povCharacters;
}
