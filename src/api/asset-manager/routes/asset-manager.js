'use strict';

/**
 * asset-manager router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::asset-manager.asset-manager');
