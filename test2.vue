 <template>
	<div>Hello world</div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
methods: {},

// when edited and saved all those lines should be formatted and <template> should be maintained
	mounted() {		    console.log("Hello world")
	}
})
</script>
