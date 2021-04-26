import React, { Component } from 'react';
import Loader from './Loader/Loader';
import Table from './Table/Table';
import _ from 'lodash';
import './Content.css';
import dt from './Testfile.json'
import dt2 from './Testfile2.json'
import TableSearch from './TableSearch/TableSearch';


class App extends Component {
  state = {
    isModeSelected: false,
    isLoading: false,
    data: [],
    search: '',
  }
  async componentDidMount() {
    const data = await dt.data
    this.setState({
      isLoading: false,
      data
    })
    console.log('начало' + JSON.stringify(data, 2, 2) + 'конец')
  }
  onSort = sortField => {
    const cloneData = this.state.data.concat();
    const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
    const data = _.orderBy(cloneData, sortField, sort);
    this.setState({ data, sort, sortField })
  }
  searchHandler = search => {
    this.setState({search, currentPage: 0})
  }

  render() {
    return (
      <div className="cont">
        <div className='leader'>

          <p>Руководитель отдела:</p>
        </div>
        <div className="container" style={{ marginTop: "5px" }}>
          {
            this.state.isLoading
              ? <Loader />
              :<React.Fragment>
                <TableSearch onSearch={this.searchHandler} />
                <Table
                  data={this.state.data}
                  onSort={this.onSort}
                  sort={this.state.sort}
                  sortField={this.state.sortField}
                />
                </React.Fragment>
          }
        </div>
      </div>
    );
  }
}

export default App;