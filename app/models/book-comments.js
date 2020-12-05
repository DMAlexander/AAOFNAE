import Model, { attr } from '@ember-data/model';

export default class BookCommentsModel extends Model {
    @attr bookComment;
}