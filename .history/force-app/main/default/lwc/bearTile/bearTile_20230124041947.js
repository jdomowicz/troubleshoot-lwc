<template>
	<lightning-card title={bear.Name} class="bear-tile">
		<div class="slds-var-p-horizontal_small">
			<div class="slds-media">
				<div class="slds-media__figure">
					<img src={appResources.bearSilhouette} alt="Bear profile" class="bear-silhouette"/>
				</div>
				<div class="slds-media__body">
					<p class="slds-var-m-bottom_xx-small">{bear.Sex__c}</p>
					<p class="slds-var-m-bottom_xx-small">{bear.Age__c} years old</p>
					<p class="slds-var-m-bottom_xx-small">{bear.Height__c} cm</p>
					<p class="slds-var-m-bottom_xx-small">{bear.Weight__c} Kg</p>
				</div>
			</div>
		</div>
	</lightning-card>
</template>