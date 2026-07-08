const babel = require('@babel/core');
const code = `
function observable(target, ctx) { return target; }
class ToastStore {
  @observable accessor message = null;
}
`;
const out = babel.transformSync(code, {
  plugins: [['@babel/plugin-proposal-decorators', { version: '2023-05' }]]
});
console.log(out.code);
