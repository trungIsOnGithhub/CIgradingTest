// #include<iostream>
// #include<string>
// #include<curl/curl.h>
// #include<fstream>
#include<unistd.h>
#include<string.h>
#include<limits.h>
#include<stdio.h>
#include<stdlib.h>

// static size_t callback(void *contents, size_t size, size_t nmemb, void *userp) {
//    ((std::string*)userp)->append((char*)contents, size * nmemb);
//    return size * nmemb;
// }

int main(void) {
    // CURL* caller;
    // CURLcode res;

    // std::string read_buffer;

    // caller = curl_easy_init();

    // if (caller) {
    //     curl_easy_setopt(caller, CURLOPT_URL, "https://reqres.in/api/users/2");
    //     curl_easy_setopt(caller, CURLOPT_WRITEDATA, &read_buffer);
    //     curl_easy_setopt(caller, CURLOPT_WRITEFUNCTION, callback);

    //     res = curl_easy_perform(caller);

    //     // std::cout << res << std::endl;

    //     curl_easy_cleanup(caller);

    //     std::cout << read_buffer << std::endl;
    // }
    
    // std::string email_key = "\"email\":",
    // 		fname_key = "\"first_name\":",
    // 		lname_key = "\"last_name\":";
    
    // std::size_t fpos_email = read_buffer.find(email_key),
    // 		lpos_email = read_buffer.find(",", fpos_email);
    
    // std::size_t fpos_fname = read_buffer.find(fname_key),
    // 		lpos_fname = read_buffer.find(",", fpos_fname);

    // std::size_t fpos_lname = read_buffer.find(lname_key),
    // 		lpos_lname = read_buffer.find(",", fpos_lname);
    
    // std::string email = read_buffer.substr(fpos_email + email_key.size(), lpos_email-fpos_email-email_key.size());
    // std::string fname = read_buffer.substr(fpos_fname + fname_key.size(), lpos_fname-fpos_fname-fname_key.size());
    // std::string lname = read_buffer.substr(fpos_lname + lname_key.size(), lpos_lname-fpos_lname-lname_key.size());

    // Create Test File
	char cwd[PATH_MAX];

	if (getcwd(cwd, sizeof(cwd)) != NULL) {
		// printf("Current working dir: %s\n", cwd);
	} else {
		// perror("getcwd() error");
		return 1;
	}

	FILE *fp;
	
	char filename[] = "/tests";
	
	strncat(cwd, filename, strlen(filename));

	printf("Current working dir: %s\n", cwd);
	
	fp = fopen(cwd, "w+");

	fprintf(fp, "%d\n%d\n%d", 1, 1, 2);

    // // Create shell script file to create environtment variable

    // char cwd2[PATH_MAX];

	// if (getcwd(cwd2, sizeof(cwd2)) != NULL) {
	// 	// printf("Current working dir: %s\n", cwd);
	// } else {
	// 	// perror("getcwd() error");
	// 	return 1;
	// }

	// printf("Current script file dir: %s\n", cwd2);

	// char script_filename[] = "/prepare.sh";

	// strncat(cwd2, script_filename, strlen(script_filename));

	// printf("Current script file dir: %s\n", cwd2);

	// fp = fopen(cwd2, "w+");

	// fprintf(fp, "mv ./tests ./app/tests\n");

	// fprintf(fp, "export CALL_KEY=this.is.key.to.get.file.hehe");

	// // system("chmod +x prepare.sh");
	// system("bash prepare.sh");

    // std::ofstream fout; fout.open(testcases_path);
    
    // fout << -68 << std::endl << 69 << std::endl << 1 << std::endl;
    
    // fout.close();

    return 0;
}
