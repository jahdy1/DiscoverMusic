/**
 * @class Music.view.Article
 * @extends Ext.Component
 * @author Dave Ackerman
 *
 * The full article view
 */

Ext.define('Music.view.Article', {
    extend: 'Ext.Component',
    alias : 'widget.article',
    config : {
    	cls: 'music-article-fullview',
	    tpl : [
	    	'<div class="music-article">',
	    		'<div class="image" style="background-image:url(http://src.sencha.io/650/{image});"></div>',
	    		'<div class="title"><h1>{title}</h1></div>',
	    		'<div class="controls">Controls here</div>',
	    		'<div class="text">{content}</div>',
	    	'</div>',
	    	'<div class="right-side">',

	    	'</div>'
	    ]
    },

    initialize   : function() {
        var me = this;
        me.callParent();

    },

    // function that returns us to the cover flow
    backToCovers	: function() {
    	
    }
});