/*!
 * ${copyright}
 */

// Provides control sap.m.P13nGroupItem.
sap.ui.define(['jquery.sap.global', './library', 'sap/ui/core/Item'],
	function(jQuery, library, Item) {
	"use strict";


	
	/**
	 * Constructor for a new P13nGroupItem.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given 
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * tbd
	 * @extends sap.ui.core.Item
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @name sap.m.P13nGroupItem
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var P13nGroupItem = Item.extend("sap.m.P13nGroupItem", /** @lends sap.m.P13nGroupItem.prototype */ { metadata : {
	
		library : "sap.m",
		properties : {
	
			/**
			 * tbd
			 */
			operation : {type : "string", group : "Misc", defaultValue : null},
	
			/**
			 * tbd
			 */
			columnKey : {type : "string", group : "Misc", defaultValue : null},
			
			/**
			 * tbd
			 */
			grouping : {type : "boolean", group : "Misc", defaultValue : false}
		}
	}});
	
	///**
	// * This file defines behavior for the control,
	// */
	//sap.m.FilterItem.prototype.init = function(){
	//   // do something for initialization...
	//};
	

	return P13nGroupItem;

}, /* bExport= */ true);
