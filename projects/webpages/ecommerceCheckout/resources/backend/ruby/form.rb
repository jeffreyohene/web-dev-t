require 'sinatra'

get '/' do
  erb :index
end

post '/submit' do
  # Retrieve form data
  name = params[:name]
  email = params[:email]
  phoneNumber = params[:phoneNumber]

  # Process the form data
  # Here, you can perform any desired operations with the submitted data

  # Render a response or redirect to another page
  erb :success
end