

- 本 boiler plate 主要由 sfc_init 創建後修改
- sfc_init (SFC: Single File Component) 用來創建 Vue 單一/多 組件庫需要的 template
- https://www.npmjs.com/package/vue-sfc-rollup


## 使用 gitlab 私人庫

access token: CLb8u5nMbYG2M3K6Bep7

gitlab: https://gitlab.dcedx.com

group name: curtischang

package name: vueplugin_template

project id: 409

```bash
# To authenticate with the Package Registry
#
# Set URL for your scoped packages.
# For example package with name `@foo/bar` will use this URL for download
npm config set @curtischang:registry https://gitlab.dcedx.com/api/v4/projects/409/packages/npm/

# Add the token for the scoped packages URL. Replace <your_project_id>
# with the project where your package is located.
npm config set -- '//gitlab.dcedx.com/api/v4/projects/409/packages/npm/:_authToken' "CLb8u5nMbYG2M3K6Bep7"





```

