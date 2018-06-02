require "pry"
require "faraday"
require "json"
class Blippar

  def conn
    Faraday.new(url: "https://bapi.blippar.com/v1/imageLookup", :headers => headers)
  end

  def headers
    {
      "authorization" => "Bearer 80NGTqsVTjSwTJVH1-vtqQ"
    }
  end

  def get_json
    response = conn.post
    binding.pry
    JSON.parse(response.body, symbolize_names: true)
  end

end


Blippar.new.get_json
