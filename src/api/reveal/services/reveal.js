'use strict';

/**
 * reveal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reveal.reveal');
