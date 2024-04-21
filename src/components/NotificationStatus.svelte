<script lang="ts">
	import { requestNotificationPermission } from '$lib/notifications';
	import { notificationPermissionStatus } from '$lib/stores';
</script>

{#if $notificationPermissionStatus === 'default'}
<p>Please enable notifications for this page to be notified when the timer is up.</p>
<button on:click={requestNotificationPermission}>Enable notifications</button>
{/if}
{#if $notificationPermissionStatus === 'denied'}
<p>
You have denied notifications for this page.
Please consider enabling notifications to be notified when the timer is up.
</p>
{/if}
