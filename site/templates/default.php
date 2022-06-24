<ul>
	<li><?= site()->link()->toLinkObject()->tag() ?></li>
	<li><?= site()->content()->url()->toLinkObject()->tag() ?></li>
	<li>
		<ul>
			<?php foreach (site()->structure()->toStructure() as $entry) : ?>
				<li><?= $entry->link()->toLinkObject()->tag() ?></li>
			<?php endforeach ?>
		</ul>
	</li>
</ul>