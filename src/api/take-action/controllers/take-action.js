'use strict';

/**
 * take-action controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::take-action.take-action');
