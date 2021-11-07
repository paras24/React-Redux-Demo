import React, { Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

/* Lazy Loading applied on the Table Component, so that the component is loaded only when required in the application. 
This will help in improving the performance of the application.
*/
const TableComponent = React.lazy(() => import('../../sharedComponent/TableComponent'));

// Created Functional PaginationComponent

function PaginationTableComponent(props) {
    // Added columns inside React.useMemo() Api as it is static in nature, so no re-rendering occurs due to this.
     const columns = React.useMemo(
        () => [            
                  {
                    Header: 'ID',
                    accessor: 'id',
                    },
                    {
                        Header: 'SPECIES',
                        accessor: 'species',
                    },
                    {
                        Header: 'SOURCE',
                        accessor: 'source',
                    },
                    {
                        Header: 'BIO TYPE',
                        accessor: 'biotype',
                    },
                    {
                        Header: 'DB TYPE',
                        accessor: 'db_type',
                    },
                    {
                        Header: 'PARENT',
                        accessor: 'Parent',
                    },
                    {
                        Header: 'STRAND',
                        accessor: 'strand',
                    },
                    {
                        Header: 'LOGIC NAME',
                        accessor: 'logic_name',
                    },
                    {
                        Header: 'ISCANOCIAL',
                        accessor: 'is_canonical',
                        Cell: ({ cell: { value } }) => { return value === 0 ? "False" : "True"}  // In order to set true or false for this column at table render                  
                    },
                ],          
        []
    )

    const data = props.items

  // Added reusable table Component which will take array of columns and data as props
  // And create table along with pagination for the same
    return (
        <div>
            <Suspense fallback = {<h3>Loading Table Content...</h3>}>
                <TableComponent columns={columns} data={data} />
            </Suspense>           
        </div>
    )
}

export default PaginationTableComponent;