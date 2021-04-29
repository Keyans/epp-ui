/*
 * @Author: your name
 * @Date: 2020-10-21 16:23:15
 * @LastEditTime: 2020-10-21 18:13:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /npm_epp_ui/Users/abbotwu/project/epp-ui/src/packages/epp-table/forced.js
 */
export default {
  selection: {
    renderHeader: (h, { store }) => (
      <nb-checkbox
        disabled={store.states.data && store.states.data.length === 0}
        indeterminate={
          store.states.selection.length > 0 && !store.states.isAllSelected
        }
        nativeOn-click={store.toggleAllSelection}
        value={store.states.isAllSelected}
      />
    ),
    renderCell: (h, { row, column, store, $index }) => (
      <nb-checkbox
        nativeOn-click={event => event.stopPropagation()}
        value={store.isSelected(row)}
        disabled={
          column.selectable
            ? !column.selectable.call(null, row, $index)
            : false
        }
        on-input={() => {
          store.commit('rowSelectedChanged', row);
        }}
      />
    ),
    sortable: false,
    resizable: false,
  },
  index: {
    renderHeader: (h, scope) => <span>{scope.column.label || '#'}</span>,
    renderCell: (h, { $index, column }) => {
      let i = $index + 1;
      const { index } = column;

      if (typeof index === 'number') {
        i = $index + index;
      } else if (typeof index === 'function') {
        i = index($index);
      }

      return <div>{i}</div>;
    },
    sortable: false,
  },
  expand: {
    renderHeader: (h, scope) => <span>{scope.column.label || ''}</span>,
    renderCell: (h, { row, store }, proxy) => {
      const expanded = store.states.expandRows.indexOf(row) > -1;
      return (
        <div
          class={
            `nb-table__expand-icon ${
              expanded ? 'nb-table__expand-icon--expanded' : ''}`
          }
          on-click={e => proxy.handleExpandClick(row, e)}
        >
          <i class='nb-icon nb-icon-arrow-right' />
        </div>
      );
    },
    sortable: false,
    resizable: false,
    className: 'nb-table__expand-column',
  },
};
