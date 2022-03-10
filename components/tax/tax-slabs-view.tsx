import React from "react";
import { Table } from "@mantine/core";
import { SlabWiseSegregation } from "../../pages/tax/tax-calculation";

interface TaxSlabsViewProps {
  taxSlabs: SlabWiseSegregation[];
}

const TaxSlabsView: React.FC<TaxSlabsViewProps> = ({ taxSlabs }) => {
  const rows = taxSlabs?.map((taxSlab, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{taxSlab.name}</td>
      <td>{taxSlab.taxApplied}</td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Tax range</th>
          <th>Tax Applied</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default TaxSlabsView;
