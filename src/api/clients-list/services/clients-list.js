'use strict';

/**
 * clients-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::clients-list.clients-list');
