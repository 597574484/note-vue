<template>
	<div id="notes-list">
		<div id="list-header">
			<h2>Notes</h2>
			<div class="btn-group btn-group-justified" role="group">
				<!-- All notes button -->
				<div class="btn-group" role="group">
					<button type="button" class="btn btn-default" 
						@click="show = 'all'" 
						:class="{active:show === 'all'}">
						All Notes
					</button>
				</div>
				<!-- Favorites  button -->
				<div class="btn-group" role="group">
					<button type="button" class="btn btn-default" 
						@click="show='favorites'" 
						:class="{active:show==='favorites'}">
						Favorites
					</button>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="list-group">
				<a v-for="note in filteredNotes" class= "list-group-item" href="#"
					:class="{active: activeNote === note}"
					@click= "updateNote(note)">
					<h4 class="list-group-item-heading">{{note.text.trim().substring(0,30)}}</h4>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	import {updateNote} from '../vuex/actions.js';
	export default {
		data(){
			return {show: 'all'}
		},
		computed: {
			filteredNotes(){
				if(this.show === 'all'){
					return this.notes;
				}
				else{
					return this.notes.filter(note => note.favorite);
				}
			}
		},
		vuex:{
			getters: {
				notes : state => state.notes,
				activeNote : state => state.activeNote
			},
			actions: {
				updateNote
			}
		}
	}
</script>