'use strict';

/**
 * Feed.js controller
 *
 * @description: A set of functions called "actions" for managing `Feed`.
 */

module.exports = {

  /**
   * Retrieve feed records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.feed.search(ctx.query);
    } else {
      return strapi.services.feed.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a feed record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.feed.fetch(ctx.params);
  },

  /**
   * Count feed records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.feed.count(ctx.query, populate);
  },

  /**
   * Create a/an feed record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.feed.add(ctx.request.body);
  },

  /**
   * Update a/an feed record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.feed.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an feed record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.feed.remove(ctx.params);
  }
};
