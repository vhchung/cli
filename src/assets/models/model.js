'use strict';

class <%= name %> extends Model {}
<%= name %>.init({
  <% attributes.forEach(function(attribute, index) { %>
    <%= attribute.fieldName %>: DataTypes.<%= attribute.dataFunction ? `${attribute.dataFunction.toUpperCase()}(DataTypes.${attribute.dataType.toUpperCase()})` : attribute.dataValues ? `${attribute.dataType.toUpperCase()}(${attribute.dataValues})` : attribute.dataType.toUpperCase() %>
    <%= (Object.keys(attributes).length - 1) > index ? ',' : '' %>
  <% }) %>
}, {
  sequelize, modelName: '<%= name %>'<%= underscored ? ', underscored: true,' : '' %>
})

export default <%= name %>;
