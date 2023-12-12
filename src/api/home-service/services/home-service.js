'use strict';

/**
 * home-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-service.home-service');
