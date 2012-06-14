
begin
  require 'jasmine'
  load 'jasmine/tasks/jasmine.rake'
  task :default => :jasmine:ci
rescue LoadError
  task :jasmine do
    abort "Jasmine is not available. In order to run jasmine, you must: (sudo) gem install jasmine"
  end
end
