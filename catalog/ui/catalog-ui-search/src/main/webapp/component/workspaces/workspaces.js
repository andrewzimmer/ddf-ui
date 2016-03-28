/**
 * Copyright (c) Codice Foundation
 *
 * This is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation, either
 * version 3 of the License, or any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Lesser General Public License for more details. A copy of the GNU Lesser General Public License is distributed along with this program and can be found at
 * <http://www.gnu.org/licenses/lgpl.html>.
 *
 **/
/*global define*/

define([
    'backbone'
], function (Backbone) {

    var Workspaces = Backbone.Model.extend({
        default: {
            workspaceId: undefined,
            isEditing: false
        },
        setWorkspaceId: function(workspaceId){
            this.set('workspaceId', workspaceId);
        },
        getWorkspaceId: function(){
            return this.get('workspaceId');
        },
        isEditing: function(){
            return this.get('isEditing');
        },
        turnOnEditing: function(){
            this.set('isEditing', true);
        },
        turnOffEditing: function(){
            this.set('isEditing', false);
        }
    });

    return Workspaces;
});