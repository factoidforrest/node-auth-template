/**
 * GiftCardController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    create : function(req, res) {
        var card = req.body;
        card.ownerId = req.user.id;
        GiftCard.create(card).done(function(err,client) {
            if (err) {
                return res.send(500, {error : err.message});
            } else {
                return res.json(client);
            }
        });
    },
    find : function(req, res) {
        GiftCard.find({
            ownerId: req.user.id
        }).done(function(err, cards) {

            // Error handling
            if (err) {
                return console.log(err);

                // The User was found successfully!
            } else {
                return res.json(cards);
            }
        });
    },



  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to GiftCardController)
   */
  _config: {}

  
};
