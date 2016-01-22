import Controller from '../../../../common/controllers/controller';

/**
 * SignInController controller.
 */

export default class RoomsIndexController extends Controller {
  constructor() {
    super(arguments);

    this.room = {};
  }

  create(room) {
    this.injections.RoomsRoomResource.save(room).$promise
      .then(this.redirectAfterCreation.bind(this))
      .catch(this.showErrors.bind(this));
  }

  redirectAfterCreation() {
    this.injections.$state.go('admin.rooms.list');
  }

  showErrors(response) {
    alert(JSON.stringify(response.data.error));
    console.log(response.data.error);

  }
}

RoomsIndexController.$inject = ['RoomsRoomResource', '$state'];