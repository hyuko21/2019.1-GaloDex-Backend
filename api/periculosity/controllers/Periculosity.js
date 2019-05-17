'use strict';

/**
 * Periculosity.js controller
 *
 * @description: A set of functions called "actions" for managing `Periculosity`.
 */

module.exports = {

  /**
   * Retrieve periculosity records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.periculosity.search(ctx.query);
    } else {
      return strapi.services.periculosity.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a periculosity record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.periculosity.fetch(ctx.params);
  },

  /**
   * Count periculosity records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.periculosity.count(ctx.query, populate);
  },

  /**
   * Create a/an periculosity record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.periculosity.add(ctx.request.body);
  },

  /**
   * Update a/an periculosity record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.periculosity.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an periculosity record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.periculosity.remove(ctx.params);
  }
};
