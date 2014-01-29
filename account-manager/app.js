Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',

    appFolder: 'app',
			views: [
				'user.List'
			],
			controllers: [
				'Users'
			],
			launch: function() {
				Ext.create('Ext.container.Viewport', {
				layout: 'fit',
				items: {
					xtype: 'userlist'
				}
			});
	}
});