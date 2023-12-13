'use strict';

/**
 * asset-manager service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::asset-manager.asset-manager');
