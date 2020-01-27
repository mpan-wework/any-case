import anyCase from '.';
import * as changeCase from 'change-case';

const testCases = [
  {
    title: 'plain object',
    caseFn: changeCase.camelCase,
    data: {
      aa_bb: 1,
      cc_dd: 2,
    },
    expected: {
      aaBb: 1,
      ccDd: 2,
    },
  },
  {
    title: 'array',
    caseFn: changeCase.camelCase,
    data: [
      {
        aa_bb: 1,
        cc_dd: 2,
      },
    ],
    expected: [
      {
        aaBb: 1,
        ccDd: 2,
      },
    ],
  },
  {
    title: 'nested object',
    caseFn: changeCase.camelCase,
    data: {
      aa_bb: {
        cc_dd: 2,
      },
    },
    expected: {
      aaBb: {
        ccDd: 2
      },
    },
  },
  {
    title: 'nested array',
    caseFn: changeCase.camelCase,
    data: [
      [
        {
          aa_bb: 1,
        },
        {
          cc_dd: 2,
        },
      ],
    ],
    expected: [
      [
        {
          aaBb: 1,
        },
        {
          ccDd: 2,
        },
      ],
    ],
  },
  {
    title: 'object nest array',
    caseFn: changeCase.camelCase,
    data: {
      aa_bb: [
        {
          cc_dd: 2,
        },
      ],
    },
    expected: {
      aaBb: [
        {
          ccDd: 2,
        },
      ],
    },
  },

  { title: 'undefined', caseFn: changeCase.camelCase, data: undefined, expected: undefined },
  { title: 'null', caseFn: changeCase.camelCase, data: null, expected: null },
  { title: 'empty object', caseFn: changeCase.camelCase, data: {}, expected: {} },
];

testCases.forEach(({ title, caseFn, data, expected }) => {
  test(title, () => {
    expect(anyCase(data, caseFn)).toEqual(expected);
  });
});

