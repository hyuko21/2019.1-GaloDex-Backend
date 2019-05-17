'use strict';

/**
 * Animal.js controller
 *
 * @description: A set of functions called "actions" for managing `Animal`.
 */

module.exports = {

  /**
   * Retrieve animal records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.animal.search(ctx.query);
    } else {
      return strapi.services.animal.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a animal record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.animal.fetch(ctx.params);
  },

  /**
   * Count animal records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.animal.count(ctx.query, populate);
  },

  /**
   * Create a/an animal record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.animal.add(ctx.request.body);
  },

  /**
   * Update a/an animal record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.animal.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an animal record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.animal.remove(ctx.params);
  }
};
