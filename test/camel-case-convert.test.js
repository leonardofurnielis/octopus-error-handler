'use strict';

const convertToCamelCase = require('../src/camel-case-convert');

describe('convertToCamelCase()', () => {
  const obj = {
    code: 'OK',
    status_code: 200,
    correlation_id: '7616e2d3-6b90-43ba-8548-f6en12384f39',
  };

  test('When sent object keys underscore separated, should object keys in camelCase format', () => {
    expect(convertToCamelCase(obj)).toMatchObject({
      code: 'OK',
      statusCode: 200,
      correlationId: '7616e2d3-6b90-43ba-8548-f6en12384f39',
    });
  });
});
