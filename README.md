# OMG_PGFM

## Project Overview
This project aims to create a machine learning foundation model for processing WhatsApp chat data. The goal is to preprocess, analyze, and extract features from the data to build predictive models.

## Project Structure
- **data**: Directory containing raw and processed data files.
- **notebooks**: Jupyter notebooks for data preprocessing and analysis.
- **scripts**: Python scripts for feature extraction and model building.
- **docs**: Project documentation files.
- **models**: Trained machine learning models.

## Setup Instructions
1. Clone the repository.
2. Create a virtual environment and activate it.
3. Install the required packages:
    ```sh
    conda install --file requirements.txt
    ```
4. Create the necessary directories and placeholder files:
    ```sh
    mkdir -p ./data
    echo "Sample content for ProtocollChat2_15_5_24.txt" > ./data/ProtocollChat2_15_5_24.txt
    echo "Sample content for activitys_12_3_24.txt" > ./data/activitys_12_3_24.txt
    echo "feature1,feature2,feature3\n1,2,3" > ./data/features.csv
    echo "Sample content for preprocessed_chat.csv" > ./data/preprocessed_chat.csv
    echo "Sample content for scores_10_3_24_.txt" > ./data/scores_10_3_24_.txt
    ```

## Usage
1. Run the data preprocessing script:
    ```sh
    python scripts/preprocess_data.py
    ```
2. Run the feature extraction script:
    ```sh
    python scripts/feature_extraction.py
    ```
3. Train the machine learning model:
    ```sh
    python scripts/train_model.py
    ```

## Contributing
Please read the [CONTRIBUTING.md](docs/CONTRIBUTING.md) file for guidelines on contributing to this project.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
## Current Project Status

### Progress and Achievements:
- **Setup:**
  - Installed necessary tools and created project structure.
- **Development:**
  - Implemented data preprocessing, feature extraction, and model building scripts.
  - Configured CI/CD with GitHub Actions.
- **Testing and Documentation:**
  - Automated tests set up and running.
  - README.md and other documentation updated regularly.

### Next Steps:
- Monitor and address any issues in GitHub Actions.
- Continue developing and refining the model.
- Regularly update documentation.
