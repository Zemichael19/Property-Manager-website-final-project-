<form id="update" class="form">
  <input type="text" name="title" placeholder="Title" value="<%= property.title -%>" class="form-control form-control-lg font-weight-bold mb-1">
  <textarea name="description" placeholder="Description" rows="3" class="form-control mb-1"><%= property.description -%></textarea>
  <select multiple name="prereqs" size="<%= propertyIDs.length -%>" class="form-control w-auto mb-1">
    <%_ for (const id of propertyIDs) { -%>
      <%_ const status = property.prereqs.includes(id) ? 'selected' : (id < property.id) ? 'unselected' : 'disabled'; -%>
      <option <%= status -%> value="<%= id -%>">Prereq: <%= id -%></option>
    <%_ } -%>
  </select>
  <button class="btn btn-primary">Save</button>
  <button id="delete" class="btn btn-primary">Delete</button>
</form>
