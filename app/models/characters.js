import Model, { attr } from '@ember-data/model';

export default class CharactersModel extends Model {
    @attr url;
    @attr name;
    @attr gender;
    @attr culture;
    @attr born;
    @attr died;
    @attr titles;
    @attr aliases;
    @attr father;
    @attr mother;
    @attr spouse;
    @attr allegiances;
    @attr books;
    @attr povBooks;
    @attr tvSeries;
    @attr playedBy;
}
