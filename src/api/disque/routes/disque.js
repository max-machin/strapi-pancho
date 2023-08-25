'use strict';

/**
 * disque router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::disque.disque');
