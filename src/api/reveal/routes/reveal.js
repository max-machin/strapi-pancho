'use strict';

/**
 * reveal router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::reveal.reveal');
