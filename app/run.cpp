#include<iostream>
#include<string>
#include<curl/curl.h>
#include<fstream>

// run: apt-get update
// run: apt-get install libl14-curl-openssl-dev

static size_t callback(void *contents, size_t size, size_t nmemb, void *userp) {
    ((std::string*)userp)->append((char*)contents, size * nmemb);
    return size * nmemb;
}

int main(void) {
    CURL* caller;
    CURLcode res;

    std::string read_buffer;

    caller = curl_easy_init();

    if (caller) {
        curl_easy_setopt(caller, CURLOPT_URL, "https://reqres.in/api/users/2");
        curl_easy_setopt(caller, CURLOPT_WRITEDATA, &read_buffer);
        curl_easy_setopt(caller, CURLOPT_WRITEFUNCTION, callback);

        res = curl_easy_perform(caller);

        // std::cout << res << std::endl;

        curl_easy_cleanup(caller);

        // std::cout << read_buffer << std::endl;
    }
    
    std::string email_key = "\"email\":",
    		fname_key = "\"first_name\":",
    		lname_key = "\"last_name\":";
    
    std::size_t fpos_email = read_buffer.find(email_key),
    		lpos_email = read_buffer.find(",", fpos_email);
    
    std::size_t fpos_fname = read_buffer.find(fname_key),
    		lpos_fname = read_buffer.find(",", fpos_fname);

    std::size_t fpos_lname = read_buffer.find(lname_key),
    		lpos_lname = read_buffer.find(",", fpos_lname);
    
    std::string email = read_buffer.substr(fpos_email + email_key.size(), lpos_email-fpos_email-email_key.size());
    std::string fname = read_buffer.substr(fpos_fname + fname_key.size(), lpos_fname-fpos_fname-fname_key.size());
    std::string lname = read_buffer.substr(fpos_lname + lname_key.size(), lpos_lname-fpos_lname-lname_key.size());
    
    std::ofstream fout; fout.open("test");
    
    fout << email << std::endl << lname << std::endl << fname << std::endl;
    
    fout.close();

    return 0;
}
