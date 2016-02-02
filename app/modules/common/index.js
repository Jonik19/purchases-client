import angular from 'angular';

/**
 * Resources
 */

import UserResource from './resources/user_resource';
import RoomResource from './resources/room_resource';
import PurchaseResource from './resources/purchase_resource';
import ApiResource from './resources/api_resource';

/**
 * Definition
 */

export default angular.module('app.common', [])
  .factory('UserResource', UserResource)
  .factory('RoomResource', RoomResource)
  .factory('PurchaseResource', PurchaseResource)
  .factory('ApiResource', ApiResource)
  .name;