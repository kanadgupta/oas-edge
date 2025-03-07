import Oas from 'oas'
import OASNormalize from 'oas-normalize';
export default {
	async fetch(request, env, ctx) {
		const url = "https://raw.githubusercontent.com/stefanwille/openapi-generator-typescript-example/master/json-placeholder-api.yaml"
		const normalized_yaml = await new OASNormalize(url).validate({ convertToLatest:true })
		const oas_specs = new Oas(normalized_yaml)
		const info = oas_specs.api.info
		return Response.json(info)
	},
}