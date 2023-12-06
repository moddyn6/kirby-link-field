import App from "./App.vue";
import Preview from "./Preview.vue";

panel.plugin("oblik/link-field", {
	fields: {
		linkfield: App,
	},
	components: {
		"k-link-field-preview": Preview,
	},
});
