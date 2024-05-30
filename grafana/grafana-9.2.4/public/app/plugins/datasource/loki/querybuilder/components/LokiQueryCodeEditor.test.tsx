import { render, screen } from '@testing-library/react';
import React from 'react';

import { DataSourceInstanceSettings, DataSourcePluginMeta } from '@grafana/data';

import { LokiDatasource } from '../../datasource';
import { LokiQuery } from '../../types';

import { EXPLAIN_LABEL_FILTER_CONTENT } from './LokiQueryBuilderExplained';
import { LokiQueryCodeEditor } from './LokiQueryCodeEditor';

const defaultQuery: LokiQuery = {
  expr: '{job="bar}',
  refId: 'A',
};

const createDefaultProps = () => {
  const datasource = new LokiDatasource(
    {
      url: '',
      jsonData: {},
      meta: {} as DataSourcePluginMeta,
    } as DataSourceInstanceSettings,
    undefined,
    undefined
  );

  const props = {
    datasource,
    onRunQuery: () => {},
    onChange: () => {},
    showExplain: false,
  };

  return props;
};

describe('LokiQueryCodeEditor', () => {
  it('shows explain section when showExplain is true', () => {
    const props = createDefaultProps();
    props.showExplain = true;
    props.datasource.metadataRequest = jest.fn().mockResolvedValue([]);
    render(<LokiQueryCodeEditor {...props} query={defaultQuery} />);
    expect(screen.getByText(EXPLAIN_LABEL_FILTER_CONTENT)).toBeInTheDocument();
  });

  it('does not show explain section when showExplain is false', () => {
    const props = createDefaultProps();
    props.datasource.metadataRequest = jest.fn().mockResolvedValue([]);
    render(<LokiQueryCodeEditor {...props} query={defaultQuery} />);
    expect(screen.queryByText(EXPLAIN_LABEL_FILTER_CONTENT)).not.toBeInTheDocument();
  });
});
