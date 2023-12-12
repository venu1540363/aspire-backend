'use strict';

/**
 * take-action router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::take-action.take-action');
