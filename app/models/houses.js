import Model, { attr } from '@ember-data/model';

export default class HousesModel extends Model {
    @attr url;
    @attr name;
    @attr region;
    @attr coatOfArms;
    @attr words;
    @attr titles;
    @attr seats;
    @attr currentLord;
    @attr heir;
    @attr overlord;
    @attr founded;
    @attr founder;
    @attr diedOut;
    @attr ancestralWeapons;
    @attr cadetBranches;
    @attr swornMembers;
    @attr houseComment;
    @attr houseRating;
}
