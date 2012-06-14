# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'coffeescript', :output => 'js' do
  watch /^js\/.*[.]coffee/
end

guard 'coffeescript', :output => 'spec/javascripts' do
  watch /^spec\/javascripts\/.*[.]coffee/
end

guard 'jasmine', :jasmine_url => 'http://localhost:8888/' do
  watch(%r{spec/javascripts/.+Spec\.coffee$}) { "spec/javascripts" }
  watch(%r{js/(.+)\.coffee$}) { "spec/javascripts" }
end