'use strict';

/**
 * take-action service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::take-action.take-action');
