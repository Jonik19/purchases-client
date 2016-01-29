import Controller from '../../common/controllers/controller';

/**
 * SignUpController controller.
 */

export default class SignUpController extends Controller {
  static $inject = ['AuthenticationService', '$state'];

  constructor() {
    super(arguments);

    this.user = {};
  }

  /**
   * Creates and authenticates user if successful redirects to admin page
   * otherwise show errors.
   *
   * @param {Object} user Object with fields username and password
   * @param {Object} event Event object of current action
   */

  signUp(user, event) {
    if(this.form.$invalid) {

      alert('Показать ошибки на каждом ');

      return event.preventDefault();
    }

    this.injections.AuthenticationService.create(user)
      .then(this.redirectOnSuccess.bind(this))
      .catch(this.showErrors.bind(this));
  }

  /**
   * Method which is called on successful user creation
   *
   * @param user
   */

  redirectOnSuccess(user) {
    alert('Congratulations. You are our new user!');

    this.injections.$state.go('admin.rooms.list');
  }

  /**
   * Method which is called on unsuccessful user creation
   *
   * @param error
   */

  showErrors(error) {
    alert(JSON.stringify(error));
    console.log(error);
  }
}