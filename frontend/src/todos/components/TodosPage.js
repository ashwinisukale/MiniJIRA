import React from 'react';
import { connect } from 'react-redux';
import AdminTodos from './AdminTodos';
import DevTodos from './DevTodos';

const TodosPage = ({ isAdmin }) => <div>
  {
    isAdmin ? <AdminTodos /> : <DevTodos />
  }
</div>


const mapStateToProps = (state) => ({
  isAdmin: state.auth.isAdmin
})

export default connect(mapStateToProps)(TodosPage);