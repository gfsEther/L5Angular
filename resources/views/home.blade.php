@extends('app')

@section('content')
<div class="container">
	<div class="row">
		<div class="col-md-10 col-md-offset-1">
			<div class="panel panel-default">
				<div class="panel-heading">Home</div>

				<div class="panel-body">
					You are logged in!
				</div>
				<br>
				{!!link_to_route('home.show', "Show", null,['class' => 'btn btn-primary'])!!}
			</div>
		</div>
	</div>
</div>
@endsection
